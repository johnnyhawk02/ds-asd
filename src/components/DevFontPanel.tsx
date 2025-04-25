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

const DevFontPanel: React.FC = () => {
  // --- State --- 
  // Font Family - Default to 'Source Code Pro' if needed, or empty
  const [selectedFont, setSelectedFont] = useState<string>('Source Code Pro');
  const [appliedFont, setAppliedFont] = useState<string>('Source Code Pro'); // Assume default is applied initially
  const [originalFontFamily, setOriginalFontFamily] = useState<string>('');
  // Color - Default to logo-orange
  const [selectedColor, setSelectedColor] = useState<string>('#FF4D00'); // Default to logo-orange
  const [appliedColor, setAppliedColor] = useState<string>('#FF4D00'); // Assume default is applied
  const [originalTextColor, setOriginalTextColor] = useState<string>(''); 
  const [originalLogoBgColor, setOriginalLogoBgColor] = useState<string>('');
  // Font Size - Default to 32px
  const [selectedFontSize, setSelectedFontSize] = useState<number>(32);
  const [appliedFontSize, setAppliedFontSize] = useState<number | null>(32); // Assume default is applied
  const [originalFontSize, setOriginalFontSize] = useState<string>('');
  // Error
  const [error, setError] = useState<string>('');

  // --- Refs --- 
  const textElementRef = useRef<HTMLElement | null>(null);
  const logoElementRef = useRef<HTMLElement | null>(null);

  // --- Initial Setup Effect --- 
  useEffect(() => {
    textElementRef.current = document.getElementById('navbar-site-name');
    logoElementRef.current = document.getElementById('navbar-logo-mask');
    
    // Store originals if needed for hard reset, but resets will now go to new defaults
    if (textElementRef.current) {
      const computedStyle = window.getComputedStyle(textElementRef.current);
      setOriginalFontFamily(computedStyle.fontFamily); // Store computed original
      setOriginalTextColor(computedStyle.color);
      setOriginalFontSize(computedStyle.fontSize);
    }
     if (logoElementRef.current) {
       const computedStyle = window.getComputedStyle(logoElementRef.current);
       setOriginalLogoBgColor(computedStyle.backgroundColor);
     }

     // Ensure initial state matches new defaults
     setSelectedFont('Source Code Pro');
     setSelectedColor('#FF4D00');
     setSelectedFontSize(32);
     setAppliedFont('Source Code Pro');
     setAppliedColor('#FF4D00');
     setAppliedFontSize(32);

     // Ensure the default font is loaded initially if DevPanel is mounted
     // This prevents a flash if the user hasn't selected it yet
      const defaultFontUrl = `https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap`;
      if (!document.querySelector(`link[href="${defaultFontUrl}"]`)) {
          const defaultLink = document.createElement('link');
          defaultLink.id = 'google-font-dev-link'; // Allow it to be removed by reset
          defaultLink.rel = 'stylesheet';
          defaultLink.href = defaultFontUrl;
          document.head.appendChild(defaultLink);
          console.log('Pre-loaded default font: Source Code Pro');
      }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  // --- Helper --- 
  const rgbToHex = (rgb: string): string | null => {
    if (!rgb || !rgb.startsWith('rgb')) {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb.toUpperCase();
        return null; 
    }
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
    if (!result) return null;
    const r = parseInt(result[1], 10);
    const g = parseInt(result[2], 10);
    const b = parseInt(result[3], 10);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  };

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

   // Color
   useEffect(() => {
       if (!selectedColor || selectedColor === appliedColor) { return; } 
       setError('');
       if (textElementRef.current) { textElementRef.current.style.color = selectedColor; }
       if (logoElementRef.current) { logoElementRef.current.style.backgroundColor = selectedColor; }
       setAppliedColor(selectedColor);
       console.log(`Auto-applied color: ${selectedColor}`);
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
    // Reset inline styles, Tailwind classes should take over
    if (textElementRef.current) {
        textElementRef.current.style.color = '';
    }
    if (logoElementRef.current) {
        logoElementRef.current.style.backgroundColor = '';
    }
    setSelectedColor('#FF4D00'); // Reset picker
    setAppliedColor('#FF4D00');
    setError('');
    console.log('Reset color to default (#ff4d00)');
  };

  const handleResetSize = () => {
     // Reset inline style, Tailwind class `text-[32px]` should take over
     if (textElementRef.current) {
        textElementRef.current.style.fontSize = '';
     }
     setSelectedFontSize(32); // Reset slider
     setAppliedFontSize(32);
     setError('');
     console.log('Reset font size to default (32px)');
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
            <button onClick={handleResetColor} disabled={selectedColor.toUpperCase() === '#FF4D00'} title="Reset color to default" className={`bg-gray-200 text-subtle-text p-1.5 rounded text-sm transition-colors ${selectedColor.toUpperCase() === '#FF4D00' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M4 9a9 9 0 0114.65 5.31M20 20v-5h-5M20 15a9 9 0 00-14.65-5.31" /></svg></button>
          </div>
       </div>
       
       {/* Font Size Section */}
       <div>
         <label htmlFor="font-size-slider" className="block text-sm font-semibold text-text mb-1">Site Name Font Size ({selectedFontSize}px)</label>
         <div className="flex items-center gap-2">
            <input id="font-size-slider" type="range" min="16" max="32" step="1" value={selectedFontSize} onChange={(e) => setSelectedFontSize(parseInt(e.target.value, 10))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" title="Adjust font size"/>
             {/* Update disabled logic for reset */}
             <button onClick={handleResetSize} disabled={selectedFontSize === 32} title="Reset font size to default" className={`bg-gray-200 text-subtle-text p-1.5 rounded text-sm transition-colors ${ selectedFontSize === 32 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M4 9a9 9 0 0114.65 5.31M20 20v-5h-5M20 15a9 9 0 00-14.65-5.31" /></svg></button>
         </div>
       </div>

      {/* Error Message */}
      {error && (<p className="text-xs text-red-600 mt-2 border-t pt-2">Error: {error}</p>)}
     </div>
  );
};

export default DevFontPanel; 