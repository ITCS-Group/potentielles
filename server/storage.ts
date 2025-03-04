import { InsertUser, User, UserRole, Entrepreneur, Project, Activity, Survey, SurveyResponse } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Entrepreneur operations
  getEntrepreneur(id: number): Promise<Entrepreneur | undefined>;
  createEntrepreneur(entrepreneur: Partial<Entrepreneur>): Promise<Entrepreneur>;
  
  // Project operations
  getProject(id: number): Promise<Project | undefined>;
  getProjectsByEntrepreneur(entrepreneurId: number): Promise<Project[]>;
  createProject(project: Partial<Project>): Promise<Project>;
  updateProject(id: number, project: Partial<Project>): Promise<Project>;
  
  // Activity operations
  getActivities(projectId: number): Promise<Activity[]>;
  createActivity(activity: Partial<Activity>): Promise<Activity>;
  
  // Survey operations
  createSurvey(survey: Partial<Survey>): Promise<Survey>;
  getSurveys(): Promise<Survey[]>;
  getSurveyResponses(surveyId: number): Promise<SurveyResponse[]>;
  submitSurveyResponse(response: Partial<SurveyResponse>): Promise<SurveyResponse>;

  sessionStore: session.SessionStore;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private entrepreneurs: Map<number, Entrepreneur>;
  private projects: Map<number, Project>;
  private activities: Map<number, Activity>;
  private surveys: Map<number, Survey>;
  private surveyResponses: Map<number, SurveyResponse>;
  sessionStore: session.SessionStore;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.entrepreneurs = new Map();
    this.projects = new Map();
    this.activities = new Map();
    this.surveys = new Map();
    this.surveyResponses = new Map();
    this.currentId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id, language: "fr" };
    this.users.set(id, user);
    return user;
  }

  async getEntrepreneur(id: number): Promise<Entrepreneur | undefined> {
    return this.entrepreneurs.get(id);
  }

  async createEntrepreneur(entrepreneur: Partial<Entrepreneur>): Promise<Entrepreneur> {
    const id = this.currentId++;
    const newEntrepreneur = { ...entrepreneur, id } as Entrepreneur;
    this.entrepreneurs.set(id, newEntrepreneur);
    return newEntrepreneur;
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getProjectsByEntrepreneur(entrepreneurId: number): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.entrepreneurId === entrepreneurId,
    );
  }

  async createProject(project: Partial<Project>): Promise<Project> {
    const id = this.currentId++;
    const newProject = { ...project, id } as Project;
    this.projects.set(id, newProject);
    return newProject;
  }

  async updateProject(id: number, project: Partial<Project>): Promise<Project> {
    const existing = await this.getProject(id);
    if (!existing) throw new Error("Project not found");
    const updated = { ...existing, ...project };
    this.projects.set(id, updated);
    return updated;
  }

  async getActivities(projectId: number): Promise<Activity[]> {
    return Array.from(this.activities.values()).filter(
      (activity) => activity.projectId === projectId,
    );
  }

  async createActivity(activity: Partial<Activity>): Promise<Activity> {
    const id = this.currentId++;
    const newActivity = { ...activity, id } as Activity;
    this.activities.set(id, newActivity);
    return newActivity;
  }

  async createSurvey(survey: Partial<Survey>): Promise<Survey> {
    const id = this.currentId++;
    const newSurvey = { ...survey, id } as Survey;
    this.surveys.set(id, newSurvey);
    return newSurvey;
  }

  async getSurveys(): Promise<Survey[]> {
    return Array.from(this.surveys.values());
  }

  async getSurveyResponses(surveyId: number): Promise<SurveyResponse[]> {
    return Array.from(this.surveyResponses.values()).filter(
      (response) => response.surveyId === surveyId,
    );
  }

  async submitSurveyResponse(response: Partial<SurveyResponse>): Promise<SurveyResponse> {
    const id = this.currentId++;
    const newResponse = { ...response, id } as SurveyResponse;
    this.surveyResponses.set(id, newResponse);
    return newResponse;
  }
}

export const storage = new MemStorage();
