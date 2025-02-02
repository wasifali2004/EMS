localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    taskNumber: 3,
    activeTask: 1,
    tasks: [
      {
        title: "Fix UI bugs",
        description: "Resolve alignment issues on the dashboard.",
        date: "2025-02-01",
        active: 2,
        new_task: 4,
        completed_task: 3,
        failed: 1
      },
      {
        title: "Refactor Codebase",
        description: "Improve maintainability by refactoring redundant code.",
        date: "2025-02-03",
        active: 4,
        new_task: 5,
        completed_task: 2,
        failed: 2
      },
      {
        title: "Update Documentation",
        description: "Add missing comments and explanations.",
        date: "2025-02-05",
        active: 1,
        new_task: 3,
        completed_task: 2,
        failed: 1
      }
    ],
    active: 1, new: 1, completed: 1, failed: 0 
  },
  {
    id: 2,
    firstName: "Sarah",
    email: "employee2@example.com",
    password: "123",
    taskNumber: 2,
    activeTask: 1,
    tasks: [
      {
        title: "Develop API Endpoint",
        description: "Create a new authentication endpoint.",
        date: "2025-02-04",
        active: 1,
        new_task: 4,
        completed_task: 2,
        failed: 3
      },
      {
        title: "Fix Login Bug",
        description: "Resolve login failure due to session timeout.",
        date: "2025-02-06",
        active: 4,
        new_task: 2,
        completed_task: 4,
        failed: 0
      }
    ],
    active: 1, new: 0, completed: 1, failed: 0 
  },
  {
    id: 3,
    firstName: "Mike",
    email: "employee3@example.com",
    password: "123",
    taskNumber: 3,
    activeTask: 1,
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Increase test coverage for new features.",
        date: "2025-02-06",
        active: 5,
        new_task: 3,
        completed_task: 1,
        failed: 0
      },
      {
        title: "Code Review",
        description: "Review PRs for latest feature updates.",
        date: "2025-02-08",
        active: 2,
        new_task: 1,
        completed_task: 5,
        failed: 2
      },
      {
        title: "Optimize Queries",
        description: "Improve database query performance.",
        date: "2025-02-10",
        active: 4,
        new_task: 1,
        completed_task: 6,
        failed: 3
      }
    ],
    active: 1, new: 0, completed: 1, failed: 1 
  },
  {
    id: 4,
    firstName: "Emma",
    email: "employee4@example.com",
    password: "123",
    taskNumber: 2,
    activeTask: 1,
    tasks: [
      {
        title: "Design New Feature",
        description: "Create UI mockups for the new feature.",
        date: "2025-02-09",
        active: 5,
        new_task: 1,
        completed_task: 6,
        failed: 5
      },
      {
        title: "Improve Accessibility",
        description: "Ensure compliance with WCAG guidelines.",
        date: "2025-02-11",
        active: 1,
        new_task: 2,
        completed_task: 1,
        failed: 1
      }
    ],
    active: 1, new: 1, completed: 0, failed: 0 
  },
  {
    id: 5,
    firstName: "David",
    email: "employee5@example.com",
    password: "123",
    taskNumber: 2,
    activeTask: 1,
    active: 1, new: 0, completed: 1, failed: 0,
    tasks: [
      {
        title: "Monitor Server Performance",
        description: "Check server logs and optimize performance.",
        date: "2025-02-11",
        active: 1,
        new_task: 1,
        completed_task: 4,
        failed: 2
      },
      {
        title: "Deploy New Version",
        description: "Push the latest updates to production.",
        date: "2025-02-13",
        active: 2,
        new_task: 3,
        completed_task: 3,
        failed: 2
      }
    ],
  }
];

    
    const admin = [ {
      "id": 999,
      "firstName": "Wasif Ali",
      "email": "admin@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Oversee Project Development",
          "description": "Ensure smooth workflow across all teams.",
          "date": "2025-02-13",
          "active": 1,
          "new_task": 2,
          "completed_task": 3,
          "failed": 1
        },
        {
          "title": "Plan Team Meeting",
          "description": "Schedule a discussion for upcoming features.",
          "date": "2025-02-14",
          "active": false,
          "new_task": true,
          "completed_task": false,
          "failed": false
        }
      ]
    }
]

export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employees'))
  localStorage.setItem('admin', JSON.stringify(admin)); // Save
  const adminData = JSON.parse(localStorage.getItem('admin')); // Retrieve
  
  return {employees, admin};
}
  