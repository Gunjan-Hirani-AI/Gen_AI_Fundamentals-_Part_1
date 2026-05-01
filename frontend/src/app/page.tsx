"use client";

import { useState, useEffect } from "react";
import { fileData, FileItem, Tab } from "./data/files";

export default function Home() {
  const [openSections, setOpenSections] = useState<string[]>(["chatmodels"]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>("existing");

  // Reset tab when file changes
  useEffect(() => {
    if (selectedFile) {
      if (selectedFile.tabs && selectedFile.tabs.length > 0) {
        setActiveTabId(selectedFile.tabs[0].id);
      } else {
        setActiveTabId("existing");
      }
    }
  }, [selectedFile]);

  const toggleSection = (section: string) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter(s => s !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const selectFile = (file: FileItem) => {
    setSelectedFile(file);
  };

  const getActiveTab = (): Tab | null => {
    if (!selectedFile || !selectedFile.tabs) return null;
    return selectedFile.tabs.find(t => t.id === activeTabId) || selectedFile.tabs[0];
  };

  const activeTab = getActiveTab();

  // Helper to render nested libraries
  const renderLibrary = (libStr: string) => {
    const [module, functions] = libStr.split(":");
    if (!functions) {
      return <div className="library-module-name">{module}</div>;
    }
    
    const funcList = functions.split(",").map(f => f.trim());
    
    return (
      <div className="library-item-content">
        <div className="library-module-name">{module}</div>
        {funcList.map((func, i) => (
          <div key={i} className="library-function-tag">{func}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Generative AI Basics Part-1</h1>
          <h2 className="sidebar-title" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Learnings & Implementations</h2>
          <p className="sidebar-subtitle">By Gunjan Hirani</p>
        </div>

        <div className="sidebar-content">
          {/* ChatModels Section */}
          <div className="section">
            <div 
              className={`section-header ${openSections.includes('chatmodels') ? 'active' : ''}`}
              onClick={() => toggleSection('chatmodels')}
            >
              <span className="section-title">
                <span className={`section-icon ${openSections.includes('chatmodels') ? 'open' : ''}`}>▶</span>
                🤖 ChatModels
              </span>
              <span className="section-count">{fileData.chatmodels.length}</span>
            </div>
            <div className={`file-list ${openSections.includes('chatmodels') ? 'open' : ''}`}>
              {fileData.chatmodels.map((file) => (
                <div 
                  key={file.id}
                  className={`file-item ${selectedFile?.id === file.id ? 'active' : ''}`}
                  onClick={() => selectFile(file)}
                >
                  <span className="file-icon">🐍</span>
                  {file.name}
                </div>
              ))}
            </div>
          </div>

          {/* Embeddings Section */}
          <div className="section">
            <div 
              className={`section-header ${openSections.includes('embeddings') ? 'active' : ''}`}
              onClick={() => toggleSection('embeddings')}
            >
              <span className="section-title">
                <span className={`section-icon ${openSections.includes('embeddings') ? 'open' : ''}`}>▶</span>
                🔢 Embeddings
              </span>
              <span className="section-count">{fileData.embeddings.length}</span>
            </div>
            <div className={`file-list ${openSections.includes('embeddings') ? 'open' : ''}`}>
              {fileData.embeddings.map((file) => (
                <div 
                  key={file.id}
                  className={`file-item ${selectedFile?.id === file.id ? 'active' : ''}`}
                  onClick={() => selectFile(file)}
                >
                  <span className="file-icon">🐍</span>
                  {file.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {selectedFile ? (
          <>
            <div className="content-header">
              <h1 className="content-title">{activeTab?.title || selectedFile.title}</h1>
              <p className="content-subtitle">{selectedFile.name}</p>
            </div>

            <div className="content-body">
              {/* Tab Selector */}
              {selectedFile.tabs && selectedFile.tabs.length > 0 && (
                <div className="tabs-container">
                  {selectedFile.tabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`tab-button ${activeTabId === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTabId(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="description-box">
                <p className="description-text">
                  {activeTab?.description || selectedFile.description}
                </p>
              </div>

              {/* Info Cards */}
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-label">Input</div>
                  <div className="info-value">{activeTab?.input || selectedFile.input}</div>
                </div>
                <div className="info-card">
                  <div className="info-label">Output</div>
                  <div className="info-value">{activeTab?.output || selectedFile.output}</div>
                </div>
              </div>

              {/* Libraries */}
              <div className="code-section">
                <div className="section-label">Libraries Used</div>
                <div className="info-grid">
                  {selectedFile.libraries.map((lib, idx) => (
                    <div key={idx} className="info-card">
                      {renderLibrary(lib)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              {(activeTab?.keyLearnings || selectedFile.keyLearnings) && (
                <div className="code-section">
                  <div className="section-label">Key Learnings</div>
                  <div className="description-box">
                    <ul className="learnings-list">
                      {(activeTab?.keyLearnings || selectedFile.keyLearnings).map((learning, idx) => (
                        <li key={idx} className="learning-item">
                          <span className="learning-bullet"></span>
                          <span className="learning-text">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Code Example */}
              {(activeTab?.code || selectedFile.code) && (
                <div className="code-section">
                  <div className="section-label">Code Example</div>
                  <div className="code-block">
                    <div className="code-header">
                      <span className="code-filename">{selectedFile.name}</span>
                      <span className="code-lang">Python</span>
                    </div>
                    <div className="code-content">
                      <pre>{activeTab?.code || selectedFile.code}</pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="content-body">
            <div className="no-selection">
              <div className="no-selection-icon">📁</div>
              <div className="no-selection-text">Select a file to view details</div>
              <div className="no-selection-hint">Click on any file in the sidebar to explore the code and learnings</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
