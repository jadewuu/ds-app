import { BrowserRouter } from "react-router-dom"
import { AppLayout } from "@/components/layout/AppLayout"

export default function App() {
  return (
    <BrowserRouter basename="/ds-app">
      <AppLayout />
    </BrowserRouter>
  )
}
