"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { CountryCode, SequenceId } from "./config";

type StudyState = {
  country: CountryCode | null;
  sequence: SequenceId | null;
  participantId: string | null;
};

type StudyContextValue = StudyState & {
  setCountry: (c: CountryCode) => void;
  setSequence: (s: SequenceId) => void;
  ready: boolean;
};

const STORAGE_KEY = "waiting-study-state";

const StudyContext = createContext<StudyContextValue | null>(null);

function makeParticipantId() {
  return "P-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

export function StudyProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StudyState>({
    country: null,
    sequence: null,
    participantId: null,
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        setState(JSON.parse(raw));
      }
    } catch {
      // ignore malformed storage
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, ready]);

  const setCountry = (c: CountryCode) =>
    setState((s) => ({
      ...s,
      country: c,
      participantId: s.participantId ?? makeParticipantId(),
    }));

  const setSequence = (seq: SequenceId) => setState((s) => ({ ...s, sequence: seq }));

  return (
    <StudyContext.Provider value={{ ...state, setCountry, setSequence, ready }}>
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  const ctx = useContext(StudyContext);
  if (!ctx) throw new Error("useStudy must be used within StudyProvider");
  return ctx;
}
