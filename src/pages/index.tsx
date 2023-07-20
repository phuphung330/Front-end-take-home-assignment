import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root defaultValue="All">
          <Tabs.List className="my-10">
            <Tabs.Trigger
              className=" m-1 rounded-[9999px] border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="All"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className=" m-1 rounded-[9999px] border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="Pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className=" m-1 rounded-[9999px] border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="Completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="All">
            <TodoList renderKey="All" />
          </Tabs.Content>
          <Tabs.Content value="Pending">
            <TodoList renderKey="Pending" />
          </Tabs.Content>
          <Tabs.Content value="Completed">
            <TodoList renderKey="Completed" />
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
