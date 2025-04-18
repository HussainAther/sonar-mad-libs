# Sonar Mad Libs 🎩🧠

Sonar Mad Libs is a creative, silly, and fact-powered storytelling toy built for the **Perplexity Hackathon 2025**.

Give it a few random words, pick a story style (like *news article*, *fairy tale*, or *academic paper*), and watch it generate a **cited**, **logically twisted**, and **Sonar-powered** story that blends truth with chaos.

Created by **Syed Hussain Ather**  
Contact: **shussainather@gmail.com**

---

## 🚀 What It Does

- Users input a few silly (or serious) words
- Choose from different story styles: Fairy Tale, Sci-Fi, News Report, Academic Essay, etc.
- Behind the scenes, we use **Perplexity’s Sonar Reasoning API** to:
  - Generate real facts
  - Chain ideas logically
  - Add relevant citations
- Output: a bizarrely true story that you can laugh at, learn from, or share.

---

## 💡 Why We Built It

We wanted to build something that inspires **curiosity**, **playfulness**, and **knowledge-seeking** all at once. Sonar Mad Libs makes research feel like a game and learning feel like magic.

This project was created for the **Most Fun / Creative Project** category of the Perplexity Hackathon 2025.

---

## 🧠 Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express
- **AI Engine:** [Perplexity Sonar API](https://docs.perplexity.ai/)
- **Hosting:** Vercel (frontend), Railway / Render (backend)

---

## 🧪 How We Use the Sonar API

We send a custom prompt to the **Sonar Reasoning API**, like:

> “Write a sci-fi story using the words ‘moon’, ‘popsicle’, and ‘quantum mechanics’. Include real facts and cite your sources.”

Sonar returns:
- A logical response with chain-of-thought reasoning
- Trusted citations
- Insights that blend reality with user whimsy

---

## 📸 Screenshots

*(To be added after demo video is created)*

---

## 📽️ Demo Video

[📺 Watch our 3-minute demo here](https://your-demo-link.com)  
*(Coming soon before the submission deadline)*

---

## 📂 How to Run It Locally

```bash
git clone https://github.com/hussainather/sonar-mad-libs.git
cd sonar-mad-libs

# Setup backend
cd server
npm install
touch .env  # Add your SONAR_API_KEY here
npm start

# Setup frontend
cd ../client
npm install
npm start
```

Make sure to grab your Sonar API key from the [Perplexity Developer Dashboard](https://docs.perplexity.ai/) and place it in your `.env` file like so:

```
SONAR_API_KEY=your-api-key-here
```

---

## 🎉 Submission Category

🏆 **Most Fun / Creative Project**

Because we believe learning and laughter should go hand in hand—and research should sometimes involve bananas, space pirates, and Wi-Fi-enabled lava monsters.

---

## 🛡️ License

MIT License © 2025 Syed Hussain Ather

---

## 📬 Contact

👤 **Syed Hussain Ather**  
📧 **shussainather@gmail.com**  
🔗 [GitHub](https://github.com/hussainather)  
🐦 [Twitter](https://twitter.com/yourhandle) *(if you want to add it)*

---

*Made with 💜, curiosity, and a dash of madness.*
