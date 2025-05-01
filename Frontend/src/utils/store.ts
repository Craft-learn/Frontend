import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    ipfsUrl: string;
    setIpfsUrl: (url: string) => void;
}

export const useStoreIPFS = create(
    persist<State>(
        (set) => ({
            ipfsUrl: "",
            setIpfsUrl: (url) => set({ ipfsUrl: url }),
        }),
        {
            name: "ipfs-url",
        }
    )
);

interface JobData {
  jobTitle: string;
  experienceRequired: string;
  jobMediaUrls: string[];
  jobContextLink: string;
  additionalInfo: string;
  jobDescription: string;
  amount: number;
  duration: number;
  requiredSkills: string[];
  jobLocation: string;
  setJobTitle: (title: string) => void;
  setJobDescription: (description: string) => void;
  setJobLocation: (location: string) => void;
  setAmount: (amount: number) => void;
  setDuration: (duration: number) => void;
  setExperienceRequired: (experience: string) => void;
  setJobMediaUrls: (urls: string[]) => void;
  setJobContextLink: (link: string) => void;
  setAdditionalInfo: (info: string) => void;
  setRequiredSkills: (skills: string[]) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

export const useGetJobData = create<JobData>()(
  persist(
    (set) => ({
      // Initial state
      jobTitle: "",
      experienceRequired: "",
      jobMediaUrls: [],
      jobContextLink: "",
      additionalInfo: "",
      jobDescription: "",
      amount: 0,
      duration: 0,
      requiredSkills: [],
      jobLocation: "",

      // Actions
      setJobTitle: (title) => set({ jobTitle: title }),
      setJobDescription: (description) => set({ jobDescription: description }),
      setJobLocation: (location) => set({ jobLocation: location }),
      setAmount: (amount) => set({ amount: amount }),
      setDuration: (duration) => set({ duration: duration }),
      setExperienceRequired: (experience) => set({ experienceRequired: experience }),
      setJobMediaUrls: (urls) => set({ jobMediaUrls: urls }),
      setJobContextLink: (link) => set({ jobContextLink: link }),
      setAdditionalInfo: (info) => set({ additionalInfo: info }),
      setRequiredSkills: (skills) => set({ requiredSkills: skills }),
      addSkill: (skill) => 
        set((state) => ({
          requiredSkills: state.requiredSkills.includes(skill)
            ? state.requiredSkills
            : [...state.requiredSkills, skill]
        })),
      removeSkill: (skill) => 
        set((state) => ({
          requiredSkills: state.requiredSkills.filter((s) => s !== skill)
        }))
    }),
    {
      name: "job-data"
    }
  )
);