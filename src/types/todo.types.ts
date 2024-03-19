export interface TodoDTO {
    id: string
    title: string
    detail?: string
    isFinished: boolean
    priority: "HIGH" | "MEDIUM" | "LOW"
    createdAt: string
}