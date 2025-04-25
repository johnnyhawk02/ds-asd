import React, { useState, useEffect, useRef } from 'react';

// List of Google Fonts
const googleFonts = [
  // Sans Serif (Clean & Modern)
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Poppins',
  'Source Sans Pro',
  'Nunito',
  'Raleway',
  'Inter',
  'Work Sans',
  'Ubuntu',
  // Serif (Classic & Elegant)
  'Merriweather',
  'Playfair Display',
  'Lora',
  'PT Serif',
  'Noto Serif',
  // Display (Unique & Stylized)
  'Lobster',
  'Pacifico',
  'Caveat',
  'Dancing Script',
  'Oswald',
  'Bebas Neue',
  'Anton',
  'Abril Fatface',
  'Comfortaa',
  'Righteous',
  // Monospace (Code-like)
  'Roboto Mono',
  'Source Code Pro',
  'Inconsolata'
];

// Helper function to convert HEX to HSL string "H S% L%"
const hexToHslString = (hex: string): string | null => {
  if (!hex || !hex.startsWith('#') || (hex.length !== 7 && hex.length !== 4)) {
    return null; // Invalid hex
  }

  let r = 0, g = 0, b = 0;
  if (hex.length === 4) { // Expand shorthand hex #RGB to #RRGGBB
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }

  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
};

const DevFontPanel: React.FC = () => {
  // --- State --- 
  // Font Family - Default to 'Source Code Pro' if needed, or empty
  const [selectedFont, setSelectedFont] = useState<string>('Source Code Pro');
  const [appliedFont, setAppliedFont] = useState<string>('Source Code Pro'); // Assume default is applied initially
  // Color - Default to primary color HEX for input
  const [selectedColor, setSelectedColor] = useState<string>('#03baae'); // New default HEX
  const [appliedColor, setAppliedColor] = useState<string>('#03baae'); // New default HEX
  // Font Size - Default to 28px
  const [selectedFontSize, setSelectedFontSize] = useState<number>(28); // Default to 28px
  const [appliedFontSize, setAppliedFontSize] = useState<number | null>(28); // Assume default is applied
  // Error
  const [error, setError] = useState<string>('');

  // --- Refs --- 
  // Restore refs as they are needed for font size/family manipulation
  const textElementRef = useRef<HTMLElement | null>(null);
  const logoElementRef = useRef<HTMLElement | null>(null); // Keep logo ref in case needed later

  // --- Initial Setup Effect --- 
  useEffect(() => {
    // Restore direct ref assignments
    textElementRef.current = document.getElementById('navbar-site-name');
    logoElementRef.current = document.getElementById('navbar-logo-mask'); // Keep logo ref assignment
    
     // Ensure initial state matches new defaults
     setSelectedFont('Source Code Pro');
     setSelectedColor('#03baae'); // New default HEX
     setSelectedFontSize(28); 
     setAppliedFont('Source Code Pro');
     setAppliedColor('#03baae'); // New default HEX
     setAppliedFontSize(28); 

     // Ensure the default font is loaded initially
     const defaultFontUrl = `https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap`;
     if (!document.querySelector(`link[href="${defaultFontUrl}"]`)) {
         const defaultLink = document.createElement('link');
         defaultLink.id = 'google-font-dev-link'; // Allow it to be removed by reset
         defaultLink.rel = 'stylesheet';
         defaultLink.href = defaultFontUrl;
         document.head.appendChild(defaultLink);
         console.log('Pre-loaded default font: Source Code Pro');
     }

     // Set the initial CSS variable state (optional, should be inherited from CSS)
     // document.documentElement.style.setProperty('--color-primary', '175 97% 37%');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Auto-Apply Effects --- 
  // Font Family
  useEffect(() => {
     if (!selectedFont || selectedFont === appliedFont) {
       // If selection is cleared, reset the font (to new default)
       if (!selectedFont && appliedFont) handleResetFont();
       return;
    }
    setError('');
    const fontUrl = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g, '+')}:wght@400;700&display=swap`;
    const existingLink = document.getElementById('google-font-dev-link');
    if (existingLink) existingLink.remove();
    const link = document.createElement('link');
    link.id = 'google-font-dev-link';
    link.rel = 'stylesheet';
    link.href = fontUrl;
    link.onerror = () => {
      setError(`Failed to load font: ${selectedFont}. Check spelling or network.`);
      setAppliedFont(''); // Clear applied state on error
      setSelectedFont(''); // Reset dropdown
      handleResetFont(); // Attempt to reset to default font style
    };
    document.head.appendChild(link);
    if (textElementRef.current) {
      // Apply as inline style for dynamic change
      textElementRef.current.style.fontFamily = `\"${selectedFont}\", sans-serif`;
      setAppliedFont(selectedFont);
      console.log(`Auto-applied font: ${selectedFont}`);
    } else { setError('Target element #navbar-site-name not found for font.'); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFont]);

   // Color - Update CSS Variable
   useEffect(() => {
       if (!selectedColor || selectedColor.toUpperCase() === appliedColor.toUpperCase()) { return; } 
       setError('');

       const hslString = hexToHslString(selectedColor);

       if (hslString) {
         document.documentElement.style.setProperty('--color-primary', hslString);
         setAppliedColor(selectedColor); // Update applied state with HEX
         console.log(`Auto-applied primary color (HSL): ${hslString}`);
       } else {
         setError('Invalid HEX color selected.');
         // Optionally reset to previous applied color
         setSelectedColor(appliedColor);
       }
       
       // REMOVED direct style manipulation:
       // if (textElementRef.current) { textElementRef.current.style.color = selectedColor; }
       // if (logoElementRef.current) { logoElementRef.current.style.backgroundColor = selectedColor; }
       
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedColor]); 

  // Font Size
  useEffect(() => {
    // Check ref existence before comparing appliedFontSize
    if (!textElementRef.current || selectedFontSize === appliedFontSize) return;

    textElementRef.current.style.fontSize = `${selectedFontSize}px`;
    setAppliedFontSize(selectedFontSize);
    console.log(`Auto-applied font size: ${selectedFontSize}px`);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFontSize]);

  // --- Reset Functions (Reset to NEW defaults) ---
  const handleResetFont = () => {
    const existingLink = document.getElementById('google-font-dev-link');
    if (existingLink) existingLink.remove(); 

    // Load the default font link if not already present
    const defaultFontUrl = `https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap`;
    if (!document.querySelector(`link[href="${defaultFontUrl}"]`)) {
        const defaultLink = document.createElement('link');
        defaultLink.id = 'google-font-dev-link'; // Allow removal again
        defaultLink.rel = 'stylesheet';
        defaultLink.href = defaultFontUrl;
        document.head.appendChild(defaultLink);
    }

    // Reset inline style, Tailwind class `font-logo` should take over
    if (textElementRef.current) {
        textElementRef.current.style.fontFamily = '';
    }
    setSelectedFont('Source Code Pro'); // Reset dropdown
    setAppliedFont('Source Code Pro');
    setError('');
    console.log('Reset font to default (Source Code Pro)');
  };

  const handleResetColor = () => {
    // Reset CSS variable to default HSL
    document.documentElement.style.setProperty('--color-primary', '175 97% 37%'); // New default HSL
    
    // REMOVED direct style manipulation:
    // if (textElementRef.current) { textElementRef.current.style.color = ''; }
    // if (logoElementRef.current) { logoElementRef.current.style.backgroundColor = ''; }
    
    setSelectedColor('#03baae'); // Reset picker to default HEX
    setAppliedColor('#03baae'); // Reset applied state to default HEX
    setError('');
    console.log('Reset primary color to default (HSL: 175 97% 37%)'); // Updated log message
  };

  const handleResetSize = () => {
     // Reset inline style, Tailwind class `text-[28px]` should take over
     if (textElementRef.current) {
        textElementRef.current.style.fontSize = '';
     }
     setSelectedFontSize(28); // Reset slider to new default
     setAppliedFontSize(28);
     setError('');
     console.log('Reset font size to default (28px)'); // Updated log message
  };

  // --- Render --- 
  return (
     <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl border border-gray-200 z-[100] space-y-4 max-w-xs">
       {/* Font Family Section */}
        <div>
          <label htmlFor="font-select" className="block text-sm font-semibold text-text mb-1">Site Name Font</label>
          <div className="flex items-center gap-2">
            <select id="font-select" value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)} className="border border-gray-300 px-2 py-1 rounded text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white">
              <option value="">Select Font</option>
              {googleFonts.sort().map(font => (<option key={font} value={font}>{font}</option>))}
            </select>
            {/* Update disabled logic for reset */}
            <button onClick={handleResetFont} disabled={selectedFont === 'Source Code Pro'} title="Reset font to default" className={`bg-gray-200 text-subtle-text p-1.5 rounded text-sm transition-colors ${selectedFont === 'Source Code Pro' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M4 9a9 9 0 0114.65 5.31M20 20v-5h-5M20 15a9 9 0 00-14.65-5.31" /></svg></button>
          </div>
       </div>

       {/* Color Section */}
        <div>
          <label htmlFor="color-picker" className="block text-sm font-semibold text-text mb-1">Logo & Site Name Color</label>
           <div className="flex items-center gap-2">
            <input id="color-picker" type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="border border-gray-300 rounded h-7 w-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary p-0.5" title="Select color"/>
            <span className="text-sm text-subtle-text flex-1">{selectedColor}</span> 
            {/* Update disabled logic for reset */}
            <button onClick={handleResetColor} disabled={selectedColor.toUpperCase() === '#03BAAE'} title="Reset color to default" className={`bg-gray-200 text-subtle-text p-1.5 rounded text-sm transition-colors ${selectedColor.toUpperCase() === '#03BAAE' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M4 9a9 9 0 0114.65 5.31M20 20v-5h-5M20 15a9 9 0 00-14.65-5.31" /></svg></button>
          </div>
       </div>
       
       {/* Font Size Section */}
       <div>
         <label htmlFor="font-size-slider" className="block text-sm font-semibold text-text mb-1">Site Name Font Size ({selectedFontSize}px)</label>
         <div className="flex items-center gap-2">
            <input id="font-size-slider" type="range" min="16" max="32" step="1" value={selectedFontSize} onChange={(e) => setSelectedFontSize(parseInt(e.target.value, 10))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" title="Adjust font size"/>
             {/* Update disabled logic for reset */}
             <button onClick={handleResetSize} disabled={selectedFontSize === 28} title="Reset font size to default" className={`bg-gray-200 text-subtle-text p-1.5 rounded text-sm transition-colors ${ selectedFontSize === 28 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M4 9a9 9 0 0114.65 5.31M20 20v-5h-5M20 15a9 9 0 00-14.65-5.31" /></svg></button>
         </div>
       </div>

      {/* Error Message */}
      {error && (<p className="text-xs text-red-600 mt-2 border-t pt-2">Error: {error}</p>)}
     </div>
  );
};

export default DevFontPanel; 