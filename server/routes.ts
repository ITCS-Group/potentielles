import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  // Entrepreneur routes
  app.get("/api/entrepreneurs", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const entrepreneurs = Array.from(storage.entrepreneurs.values());
    res.json(entrepreneurs);
  });

  // Project routes
  app.get("/api/projects/:entrepreneurId", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const projects = await storage.getProjectsByEntrepreneur(parseInt(req.params.entrepreneurId));
    res.json(projects);
  });

  app.post("/api/projects", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const project = await storage.createProject(req.body);
    res.status(201).json(project);
  });

  // Activity routes
  app.get("/api/activities/:projectId", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const activities = await storage.getActivities(parseInt(req.params.projectId));
    res.json(activities);
  });

  app.post("/api/activities", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const activity = await storage.createActivity(req.body);
    res.status(201).json(activity);
  });

  // Survey routes
  app.get("/api/surveys", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const surveys = await storage.getSurveys();
    res.json(surveys);
  });

  app.post("/api/surveys", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const survey = await storage.createSurvey(req.body);
    res.status(201).json(survey);
  });

  app.get("/api/surveys/:surveyId/responses", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const responses = await storage.getSurveyResponses(parseInt(req.params.surveyId));
    res.json(responses);
  });

  app.post("/api/surveys/:surveyId/responses", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const response = await storage.submitSurveyResponse({
      ...req.body,
      surveyId: parseInt(req.params.surveyId),
    });
    res.status(201).json(response);
  });

  const httpServer = createServer(app);
  return httpServer;
}
