const projects = [
    {
        title: "MultiDocChat (RAG App)",
        description:
            "Chat with multiple documents using LangChain and FAISS with context-aware responses.",
        tech: ["FastAPI", "LangChain", "FAISS", "Docker"],
        github: "https://github.com/mishraatharva/multi_doc_rag",
    },
    {
        title: "AI First CRM",
        description:
            "AI-driven CRM that converts natural language into structured DB operations using agent workflows.",
        tech: ["FastAPI", "Redux", "LangGraph", "MySQL", "sqlalchemy + pymysql", "pydantic", "react", "langchain_groq", "fastapi + uvicorn"],
        github: "https://github.com/mishraatharva/ai_first_crm",
    },
    {
        title: "medical_chat_bot",
        description:
            "AI-driven chatbot for medical queries with context-aware responses.",
        tech: ["sentence-transformers", "LangChain", "flask", "pinecone[grpc]", "langchain-pinecone"],
        github: "https://github.com/mishraatharva/medical_chat_bot",
    },
    {
        title: "Customer Voice Chatbot",
        description:
            "Voice chatbot with BERT intent detection, Whisper STT, and agent-based action execution.",
        tech: ["BERT", "Whisper", "LangChain", "FastAPI"],
        github: "https://github.com/mishraatharva/customer_support_bot-voice-",
    },
    {
        title: "job_search_agent",
        description:
            `The AI Job Search Assistant is an intelligent web app that helps users analyze their resumes,get personalized career insights, 
            and discover matching job opportunities — all in one place.`,
        tech: [" Streamlit", "LangChain", "Python", "JSON + Pandas", "faiss - cpu"],
        github: "https://github.com/mishraatharva/job_search_agent",
    },
    {
        title: "Resume Optimizer(Llamaindex)",
        description:
            `A powerful AI-powered resume optimization tool that helps job seekers enhance their resumes based on specific job requirements. 
            Built with Streamlit and powered by Nebius AI, this application provides targeted suggestions to improve your resume's effectiveness.`,
        tech: [" Streamlit", "llama-index", "Python", "llama-index-llms-groq", "llama-index-embeddings-huggingface", "pydantic", "PyPDF2"],
        github: "https://github.com/mishraatharva/resume-optimizer",
    },
    {
        title: "Adaptive GRE Test Platform",
        description:
            `An AI-powered adaptive testing system that dynamically adjusts question difficulty 
               based on a student's performance and generates a personalized learning plan using an LLM.
               The system simulates the core concept used in standardized adaptive exams such as the GRE and GMAT,
               where the next question depends on the test taker's estimated ability.
            `,
        tech: [" pymongo", "LangChain", "Python", "langchain_groq", "fastapi + uvicorn"],
        github: "https://github.com/mishraatharva/prepration_evaluator",
    },
    {
        title: "Text Summarization (T5)",
        description:
            "Fine-tuned T5 model with SentencePiece tokenizer and ROUGE evaluation.",
        tech: ["HuggingFace", "T5", "NLTK", "MLflow"],
        github: "https://github.com/mishraatharva/textsummarization",
    },
    {
        title: "Flight Price Prediction",
        description:
            "ML model predicting flight prices with feature engineering and Streamlit UI.",
        tech: ["XGBoost", "Scikit-learn", "Streamlit"],
        github: "https://github.com/mishraatharva/flight_price_prediction",
    },
    {
        title: "Image Captioning",
        description:
            "Deep learning app using VGG16 + LSTM to generate captions from images.",
        tech: ["CNN", "LSTM", "Flask"],
        github: "https://github.com/mishraatharva/Image_Sharing_Platform",
    },
];

export default projects;