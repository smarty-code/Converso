<div align="center">

# 🎓 Converso
### AI-Powered Real-Time Voice Learning Platform

*Revolutionizing personalized education through intelligent voice companions*

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT4-orange?style=for-the-badge&logo=openai)](https://openai.com/)

![Converso Demo](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Converso+AI+Learning+Platform)

</div>

---

## 🎯 Project Overview

**Converso** is a next-generation SaaS educational platform that transforms traditional learning through AI-powered voice companions. Users create personalized AI tutors for interactive, real-time voice-based learning sessions across multiple academic subjects.

<div align="center">

### ✨ Key Features

</div>

<table>
<tr>
<td width="50%">

#### 🤖 **AI Companion Builder**
- Custom AI tutor creation
- Subject-specific configurations
- Personalized learning paths
- Voice & style customization

#### 📚 **Multi-Subject Learning**  
- Mathematics & Science
- Language Arts & History
- Computer Programming
- Economics & Business

</td>
<td width="50%">

#### 🎤 **Real-Time Voice AI**
- Live voice conversations
- Advanced speech synthesis
- Natural language processing
- Interactive transcription

#### 📊 **Progress Analytics**
- Session history tracking
- Learning journey insights
- Performance metrics
- Bookmark management

</td>
</tr>
</table>

---

## �️ Technology Stack

<div align="center">

### Frontend Technologies
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat-square&logo=radix-ui&logoColor=white)

### Backend & Database
![Supabase](https://img.shields.io/badge/Supabase-181818?style=flat-square&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)

### AI & Voice Technologies
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![ElevenLabs](https://img.shields.io/badge/ElevenLabs-FF6B35?style=flat-square&logoColor=white)
![VAPI](https://img.shields.io/badge/VAPI-4F46E5?style=flat-square&logoColor=white)
![Deepgram](https://img.shields.io/badge/Deepgram-13EF93?style=flat-square&logoColor=white)

### Development Tools
![Sentry](https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logoColor=white)

</div>

<table>
<tr>
<td width="33%">

#### 🎨 **Frontend**
- **Next.js 15.3.2** - Full-stack React framework
- **React 19** - Latest with concurrent features  
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible components
- **Lottie React** - Interactive animations

</td>
<td width="33%">

#### 🔧 **Backend**
- **Supabase** - PostgreSQL + Real-time
- **Clerk Auth** - User management
- **Server Actions** - Secure API operations
- **WebRTC** - Real-time communication
- **Row Level Security** - Data protection

</td>
<td width="33%">

#### 🤖 **AI Integration**
- **OpenAI GPT-4** - Language model
- **VAPI AI** - Voice conversation platform
- **ElevenLabs** - Text-to-speech synthesis
- **Deepgram Nova-3** - Speech recognition
- **Real-time Transcription** - Live captions

</td>
</tr>
</table>

---

## 🏗️ System Architecture

<div align="center">

```mermaid
graph TB
    A[👤 User Interface] --> B[🔐 Clerk Authentication]
    B --> C[⚛️ Next.js App Router]
    C --> D[🗃️ Supabase Database]
    C --> E[🎤 VAPI Voice AI]
    E --> F[🧠 OpenAI GPT-4]
    E --> G[🔊 ElevenLabs TTS]
    E --> H[👂 Deepgram STT]
    C --> I[📊 Sentry Monitoring]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
    style E fill:#fce4ec
    style F fill:#f1f8e9
    style G fill:#e0f2f1
    style H fill:#f9fbe7
    style I fill:#fff8e1
```

</div>

### 🔄 Application Flow

<table>
<tr>
<td width="20%" align="center">

#### 1️⃣ **Authentication**
![Auth](https://img.shields.io/badge/🔐-Clerk_Auth-blueviolet?style=flat-square)

Secure sign-in/sign-up with social providers

</td>
<td width="20%" align="center">

#### 2️⃣ **Companion Builder**
![Builder](https://img.shields.io/badge/🤖-AI_Builder-orange?style=flat-square)

Custom AI tutor creation with subject & voice selection

</td>
<td width="20%" align="center">

#### 3️⃣ **Voice Session**
![Voice](https://img.shields.io/badge/🎤-Real_Time-red?style=flat-square)

WebRTC-powered live conversations with AI

</td>
<td width="20%" align="center">

#### 4️⃣ **Progress Tracking**
![Progress](https://img.shields.io/badge/📊-Analytics-green?style=flat-square)

Automatic session history & learning insights

</td>
<td width="20%" align="center">

#### 5️⃣ **Subscription**
![Subscription](https://img.shields.io/badge/💎-Premium-gold?style=flat-square)

Tiered access control & feature management

</td>
</tr>
</table>

### 🗄️ Database Schema

<table>
<tr>
<td width="25%" align="center">

#### 🤖 **Companions**
```sql
├── id (uuid)
├── name (text)
├── subject (enum)
├── topic (text)
├── voice (text)
├── style (text)
├── duration (int)
└── author (text)
```

</td>
<td width="25%" align="center">

#### 📈 **Session History**
```sql
├── id (uuid)
├── user_id (text)
├── companion_id (uuid)
├── created_at (timestamp)
└── session_data (jsonb)
```

</td>
<td width="25%" align="center">

#### 🔖 **Bookmarks**
```sql
├── id (uuid)
├── user_id (text)
├── companion_id (uuid)
└── created_at (timestamp)
```

</td>
<td width="25%" align="center">

#### 👤 **Users**
```sql
Managed by Clerk:
├── user_id (text)
├── email (text)
├── name (text)
└── subscription (text)
```

</td>
</tr>
</table>

### 🎙️ Real-Time Communication

<div align="center">

**WebRTC + AI Pipeline**

</div>

```
👤 User Speech → 🎤 Microphone → 📡 WebRTC → 👂 Deepgram STT → 🧠 GPT-4 Processing → 🔊 ElevenLabs TTS → 📡 WebRTC → 🔈 Speaker → 👤 User
                                     ↓
                               📝 Real-time Transcription Display
```

**Key Capabilities:**
- 🔄 **Bidirectional Audio Streaming** - Ultra-low latency communication
- 🗣️ **Real-Time Speech Recognition** - Instant voice-to-text conversion  
- 🧠 **Context-Aware AI Responses** - GPT-4 powered intelligent conversations
- 📝 **Live Transcription** - Real-time conversation history display
- 🎛️ **Interactive Controls** - Mute/unmute, session management

---

## 💡 Technical Innovations

<div align="center">

### 🚀 **Advanced Capabilities**

</div>

<table>
<tr>
<td width="33%">

#### 🎯 **AI Integration**
![AI](https://img.shields.io/badge/Multi--Modal-AI-ff6b6b?style=for-the-badge)

- **GPT-4 + Voice Synthesis** Integration
- **Context-Aware Learning** Adaptation  
- **Dynamic Voice Configuration**
- **Real-time Response Generation**

</td>
<td width="33%">

#### ⚡ **Performance**
![Performance](https://img.shields.io/badge/High--Performance-Architecture-4ecdc4?style=for-the-badge)

- **Server-Side Rendering** (Next.js)
- **Intelligent Database** Caching
- **Real-time Subscriptions** (Supabase)
- **Type-Safe Development** (TypeScript)

</td>
<td width="33%">

#### 🎨 **User Experience**  
![UX](https://img.shields.io/badge/Premium-UX-45b7d1?style=for-the-badge)

- **Mobile-First** Responsive Design
- **Accessibility** Standards (WCAG)
- **Progressive Enhancement**
- **Cross-Platform** Compatibility

</td>
</tr>
</table>

<div align="center">

### 🔥 **Key Technical Highlights**

</div>

```typescript
// Real-time Voice AI Integration
const handleVoiceSession = async () => {
  const assistant = configureAssistant(voice, style);
  const overrides = {
    variableValues: { subject, topic, style },
    clientMessages: ["transcript"],
  };
  
  vapi.start(assistant, overrides); // WebRTC connection established
};

// Type-safe Database Operations  
const companions = await getAllCompanionsWithBookmarkStatus({
  subject: filters.subject,
  topic: filters.topic
});

// Real-time UI Updates
useEffect(() => {
  vapi.on('speech-start', () => setIsSpeaking(true));
  vapi.on('message', handleTranscript);
}, []);
```

---

## 🎨 Design System

<div align="center">

### 🎯 **Modern Educational Interface**

</div>

<table>
<tr>
<td width="50%">

#### 🎨 **Visual Design**
- 🌈 **Subject Color Coding** - Visual organization by academic subjects
- ✨ **Interactive Animations** - Lottie-powered voice interaction feedback
- 📝 **Typography** - Bricolage Grotesque for enhanced readability  
- 📱 **Responsive Layout** - Mobile-first adaptive design

</td>
<td width="50%">

#### 🧩 **Component Architecture**
- 🔧 **Radix UI Foundation** - Accessible component primitives
- 🎭 **Design Tokens** - Consistent styling variables
- 🔄 **Reusable Components** - Modular UI building blocks
- 🎯 **Design System** - Unified visual language

</td>
</tr>
</table>

<div align="center">

**Color Palette**

![Science](https://img.shields.io/badge/Science-E5D0FF-blueviolet?style=flat-square)
![Math](https://img.shields.io/badge/Mathematics-FFDA6E-yellow?style=flat-square)
![Language](https://img.shields.io/badge/Language-BDE7FF-lightblue?style=flat-square)
![Coding](https://img.shields.io/badge/Coding-FFC8E4-pink?style=flat-square)
![History](https://img.shields.io/badge/History-FFECC8-orange?style=flat-square)
![Economics](https://img.shields.io/badge/Economics-C8FFDF-lightgreen?style=flat-square)

</div>

---

## 📊 Core Features & Business Logic

<div align="center">

### 🎯 **Feature Matrix**

</div>

<table>
<tr>
<td width="33%" align="center">

#### 💎 **Subscription Tiers**
![Subscription](https://img.shields.io/badge/SaaS-Model-success?style=for-the-badge)

**Free Tier**
- ✅ 3 AI Companions
- ✅ Basic Voice Options
- ✅ Session History

**Pro Tier**
- ✅ Unlimited Companions
- ✅ Premium Voices
- ✅ Advanced Analytics
- ✅ Priority Support

</td>
<td width="33%" align="center">

#### 📈 **Learning Analytics**  
![Analytics](https://img.shields.io/badge/Data--Driven-Insights-informational?style=for-the-badge)

- 📊 **Session Tracking**
- 📈 **Progress Visualization**  
- 🎯 **Performance Metrics**
- 🏆 **Achievement System**
- 📋 **Learning Reports**

</td>
<td width="33%" align="center">

#### 🎛️ **Content Management**
![Management](https://img.shields.io/badge/Smart-Organization-warning?style=for-the-badge)

- 🔍 **Dynamic Search & Filter**
- 🔖 **Bookmark System**
- ⏱️ **Recent Activity**
- 📚 **Companion Library**
- 👤 **Personal Dashboard**

</td>
</tr>
</table>

### 🔄 **User Journey Flow**

```mermaid
graph LR
    A[🚀 Sign Up] --> B[🤖 Create Companion]
    B --> C[🎤 Start Session]  
    C --> D[📊 Track Progress]
    D --> E[🔖 Save Favorites]
    E --> F[💎 Upgrade Plan]
    
    style A fill:#e3f2fd
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
    style E fill:#fce4ec
    style F fill:#f1f8e9
```

---

## 🔐 Security & Performance

<div align="center">

### 🛡️ **Enterprise-Grade Security**

</div>

<table>
<tr>
<td width="50%">

#### 🔒 **Security Measures**
![Security](https://img.shields.io/badge/Enterprise-Security-critical?style=for-the-badge)

- 🔐 **Clerk Authentication** - Social & MFA support
- 🛡️ **Row Level Security** - Database-level protection
- 📊 **Sentry Monitoring** - Real-time error tracking
- ✅ **Zod Validation** - Input sanitization & validation
- 🔒 **JWT Tokens** - Secure session management

</td>
<td width="50%">

#### ⚡ **Performance Optimization**
![Performance](https://img.shields.io/badge/High-Performance-success?style=for-the-badge)

- 📦 **Code Splitting** - Automatic bundle optimization
- 🖼️ **Image Optimization** - Next.js optimized assets
- 💾 **Smart Caching** - Multi-layer caching strategy
- 🔄 **Real-time Sync** - Live data synchronization
- 📱 **Mobile Optimization** - Responsive performance

</td>
</tr>
</table>

---

<div align="center">

## 🚀 **Project Showcase**

### *Full-Stack AI SaaS Platform*

**This project demonstrates mastery of:**

![Full Stack](https://img.shields.io/badge/Full--Stack-Development-blue?style=for-the-badge)
![AI Integration](https://img.shields.io/badge/AI-Integration-orange?style=for-the-badge)
![Real Time](https://img.shields.io/badge/Real--Time-Communication-red?style=for-the-badge)
![SaaS](https://img.shields.io/badge/SaaS-Architecture-green?style=for-the-badge)

**🎯 Combines cutting-edge technologies into a cohesive educational platform**  
**🚀 Solves real-world learning challenges through innovative AI solutions**  
**💼 Built with enterprise-grade security and scalability in mind**

---

### 📞 **Connect & Collaborate**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-orange?style=for-the-badge&logo=firefox)](https://portfolio.com)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:contact@example.com)

**Built with ❤️ for the future of education**

</div>
