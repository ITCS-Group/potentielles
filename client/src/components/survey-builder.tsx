import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Plus, GripVertical, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type QuestionType = "text" | "multipleChoice" | "scale" | "fileUpload";

interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  required: boolean;
}

export function SurveyBuilder() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const createSurveyMutation = useMutation({
    mutationFn: async (survey: {
      title: string;
      description: string;
      questions: Question[];
    }) => {
      const res = await apiRequest("POST", "/api/surveys", survey);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/surveys"] });
      setTitle("");
      setDescription("");
      setQuestions([]);
    },
  });

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Math.random().toString(36).substr(2, 9),
      type: "text",
      text: "",
      required: false,
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const updateQuestion = (index: number, updates: Partial<Question>) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], ...updates };
    setQuestions(newQuestions);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newQuestions = Array.from(questions);
    const [reorderedItem] = newQuestions.splice(result.source.index, 1);
    newQuestions.splice(result.destination.index, 0, reorderedItem);

    setQuestions(newQuestions);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Survey</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Survey Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Survey Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </CardContent>
      </Card>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="questions">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {questions.map((question, index) => (
                <Draggable
                  key={question.id}
                  draggableId={question.id}
                  index={index}
                >
                  {(provided) => (
                    <Card
                      className="mb-4"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div {...provided.dragHandleProps}>
                          <GripVertical className="h-5 w-5 text-gray-400" />
                        </div>
                        <CardTitle className="text-sm font-medium">
                          Question {index + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Input
                          placeholder="Question text"
                          value={question.text}
                          onChange={(e) =>
                            updateQuestion(index, { text: e.target.value })
                          }
                        />
                        <Select
                          value={question.type}
                          onValueChange={(value: QuestionType) =>
                            updateQuestion(index, { type: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Question type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="multipleChoice">
                              Multiple Choice
                            </SelectItem>
                            <SelectItem value="scale">Scale</SelectItem>
                            <SelectItem value="fileUpload">
                              File Upload
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </CardContent>
                      <CardFooter className="justify-between">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeQuestion(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="flex gap-4">
        <Button onClick={addQuestion}>
          <Plus className="h-4 w-4 mr-2" />
          Add Question
        </Button>
        <Button
          onClick={() => createSurveyMutation.mutate({ title, description, questions })}
          disabled={createSurveyMutation.isPending}
        >
          Save Survey
        </Button>
      </div>
    </div>
  );
}
