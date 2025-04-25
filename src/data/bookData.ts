// src/data/bookData.ts

// Define the structure for a book
export interface Book {
  title: string;
  authors: string;
  focusArea: string;
  targetAudience: string;
  summary: string;
}

// Array of book data
export const booksData: Book[] = [
    {
      title: 'Gross Motor Skills in Children with Down Syndrome',
      authors: "Patricia C. Winders",
      focusArea: "Gross motor development in DS",
      targetAudience: "Parents, caregivers",
      summary: `Patricia Winders's guide emphasizes that children with Down syndrome can master basic gross motor milestones (from head control to tricycle riding) but often need extra support. It provides over 100 illustrated activities for parents and professionals to promote motor development from birth through age six, covering skills such as rolling, sitting, walking, and jumping. The book explains how DS-related traits (e.g. low muscle tone and ligament laxity) can slow physical development and offers exercises to overcome these obstacles. Throughout, it stresses letting each child progress at their own pace, giving stage-by-stage guidance and practical exercises to build strength and coordination safely.`
    },
    {
      title: 'Fine Motor Skills for Children with Down Syndrome',
      authors: "Maryanne Bruni",
      focusArea: "Fine motor skills in DS",
      targetAudience: "Parents, caregivers",
      summary: `Drawing on her experience as an occupational therapist and DS parent, Bruni offers a wide range of home- and school-based activities to foster fine motor development in children with Down syndrome (birth–12 years). She introduces a "building blocks" model of fine motor skills: foundational blocks (stability, bilateral coordination, sensation) support higher skills (dexterity, daily living tasks). Each chapter focuses on one building block (with motivation strategies and development overviews) and includes numerous step-by-step activities and photos to practice that skill. The book also provides practical resources (e.g. lists of toys and household tools) to help families apply the ideas in everyday settings.`
    },
    {
      title: 'Early Communication Skills for Children with Down Syndrome',
      authors: "Libby Kumin",
      focusArea: "Communication strategies for DS",
      targetAudience: "Parents, caregivers",
      summary: `Libby Kumin's authoritative guide, based on 25+ years of experience, focuses on early speech and language development in children with Down syndrome. It covers the period from infancy through making three-word phrases, explaining how DS-specific factors (low muscle tone, hearing loss, cognitive delay) can slow communication and how to address them. Kumin details the stages of language acquisition, the role of speech–language professionals, and how to prepare for evaluations and early school transitions. The updated edition adds new chapters on augmentative/alternative communication and literacy, plus checklists and home activities designed to help children master each stage of communication.`
    },
    {
      title: 'Uniquely Human: A Different Way of Seeing Autism',
      authors: "Barry M. Prizant",
      focusArea: "Understanding and supporting ASD",
      targetAudience: "Parents, professionals",
      summary: `Barry Prizant's book reframes autism as a "different way of being human" rather than a defect. He shows that autistic behaviors are often adaptive responses or coping strategies to a stressful world, and that understanding these behaviors (instead of merely extinguishing them) is key to support. Prizant advocates enhancing each person's abilities by building on strengths and teaching new skills, always treating the individual with empathy. Through inspiring stories and practical advice drawn from decades of work, the book debunks stereotypes and offers a compassionate, strength-based perspective that promotes acceptance and deeper understanding.`
    },
    {
      title: 'The Reason I Jump',
      authors: "Naoki Higashida",
      focusArea: "Personal insights into ASD",
      targetAudience: "Parents, general readers",
      summary: `This autobiographical book by Naoki Higashida (age 13 at writing) provides a rare first-person window into nonverbal autism. Using a letter-board and computer to communicate, Higashida answers common questions about his thoughts and behaviors, emphasizing that "I can't converse well, but this doesn't mean I don't think". His candid descriptions explain why he repeats words or withdraws in social situations (as coping strategies) and reveal how sensory experiences and emotions feel from inside autism. The book's straightforward Q&A format has been praised for making the inner life of an autistic child understandable to parents, educators, and clinicians.`
    },
    {
      title: 'Ten Things Every Child with Autism Wishes You Knew',
      authors: "Ellen Notbohm",
      focusArea: "Key needs of children with ASD",
      targetAudience: "Parents",
      summary: `Ellen Notbohm's concise guide presents ten key insights (in the child's voice) that clarify the needs of children with autism. It emphasizes that the child comes first – "I am first and foremost a child; I have autism" – and covers practical needs like patience, clear communication, and acceptance. This list format makes the advice easy to grasp and apply, helping caregivers understand why behaviors occur and how to respond supportively. Widely used in autism education (it won an iParenting Media Award), the book is a straightforward primer on respecting and nurturing the unique potential of autistic children.`
    },
    {
      title: 'When Down Syndrome and Autism Intersect',
      authors: "Margaret Froehlke, Robin Sattel",
      focusArea: "Dual diagnosis of DS and ASD",
      targetAudience: "Parents, professionals",
      summary: `Froehlke and Zaborek's book is the first comprehensive guide to the dual diagnosis of Down syndrome and autism (DS-ASD). It examines how autism can present differently in individuals with Down syndrome and helps families distinguish DS-ASD from DS alone. Written by parents and professionals, it outlines best practices for screening, intervention, education, and caregiving tailored to this intersection. This one-stop resource offers practical strategies and advice for understanding, diagnosing, and supporting children who have both Down syndrome and ASD.`
    },
    {
      title: 'Understanding Pathological Demand Avoidance Syndrome in Children',
      authors: "Phil Christie et al.",
      focusArea: "Managing PDA, part of ASD",
      targetAudience: "Parents, teachers, professionals",
      summary: `Christie, Duncan, Fidler, and Healy's guide is regarded as the first comprehensive book on Pathological Demand Avoidance (PDA). It begins by explaining PDA's history and core features, then discusses how PDA affects various areas of a child's life (home, school, peer relations). The authors provide practical strategies for early intervention and positive management of demands, including ways to minimize anxiety and meltdowns at home and school. Illustrated case examples and clear advice (e.g. on handling transitions to adolescence) make this a user-friendly handbook, essential for parents and professionals supporting children with PDA.`
    },
    {
      title: 'The Family Experience of PDA',
      authors: "Eliza Fricker",
      focusArea: "Family perspective on PDA",
      targetAudience: "Parents, caregivers",
      summary: `Eliza Fricker's illustrated guide describes the ups and downs of parenting a child with PDA from a firsthand perspective. Through comics and anecdotes, it captures the overwhelming and absurd moments of PDA (meltdowns, extreme demand-avoidance) in a humorous but compassionate way. The book covers practical topics like setting limits, flexibility, collaboration, and crucially, parent self-care. Its light-hearted, relatable style reassures parents that they are not alone and validates that doing the best you can (even amidst smelly socks and chaos) is enough.`
    }
  ];
  