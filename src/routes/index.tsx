import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/common/Navbar'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-(--primary) min-h-screen flex flex-col">
      <Navbar />
    </div>
  )
}
