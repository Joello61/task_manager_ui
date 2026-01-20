import { ListTodo } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container min-h-screen bg-background mx-auto px-4">
      <nav className="fixed top-0 left-0 w-full bg-background border-b p-4 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ListTodo strokeWidth={2.5}/>
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </div>
          <div className="flex items-center gap-4">
            <a className="bg-primary text-primary-foreground border-2 border-border px-3 py-2 rounded-lg hover:scale-105 transition" href="/login">Login</a>
            <a className="bg-secondary text-secondary-foreground border-2 border-border px-3 py-2 rounded-lg hover:scale-105 transition" href="/register">Register</a>
          </div>
        </div>
      </nav>
      <div>

      </div>
    </div>
  );
}