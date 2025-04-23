# NoteFlow Project Context

## Project Overview
- **Name**: NoteFlow
- **Type**: Desktop Audio Transcription Tool
- **Primary Purpose**: Capture and transcribe audio from both PC system audio and microphone during meetings
- **Current Focus**: Real-time transcription using AssemblyAI API
- **Stack**: 
  - Frontend: React + Vite + TypeScript
  - UI Components: Radix UI
  - Styling: TailwindCSS
  - Audio Capture: Chrome Extension (for system audio)

## Project Structure
```
NoteFlowHub/
├── client/          # Main React application
├── chrome-extension/ # Chrome extension for system audio capture
└── public/          # Static assets
```

## Key Features
- Real-time audio transcription using AssemblyAI
- Dual audio source capture:
  - System audio (via Chrome extension)
  - Microphone input
- Background operation capability
- Transcript history and playback
- Simple UI for quick access to transcripts

## Current Development Focus
- System audio capture via Chrome extension
- Microphone audio capture
- Real-time transcription using AssemblyAI API
- Basic transcript management
- Background operation support

## Dependencies
### Key Frontend Dependencies
- React 18.3.1
- Radix UI components
- TailwindCSS
- AssemblyAI SDK
- Chrome Extension APIs

## TODO (Current Phase)
- [ ] Implement Chrome extension for system audio capture
- [ ] Set up AssemblyAI real-time transcription
- [ ] Create basic transcript management UI
- [ ] Add background operation support
- [ ] Implement transcript history

## Future Phases
- [ ] Backend implementation
- [ ] User authentication
- [ ] Cloud storage for transcripts
- [ ] Advanced transcript management
- [ ] Collaboration features 