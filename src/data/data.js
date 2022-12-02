export const boards = [
  {
    id: 1,
    title: 'Queue',
    tasks: filterTasks.filter((task) => task.status === 'Queue'),
  },
  {
    id: 2,
    title: 'Development',
    tasks: filterTasks.filter((task) => task.status === 'Development'),
  },
  {
    id: 3,
    title: 'Done',
    tasks: filterTasks.filter((task) => task.status === 'Done'),
  },
]

export const task = {
  id: 777,
  title: 'Написать тестовое задание',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  number: 777,
  createdAt: 'created at date',
  timeInProgress: 'time in progress',
  expDate: 'exp date',
  priority: 'priority',
  attachs: 'files attached',
  status: 'status',
  subtasks: 'subtasks',
  comments: 'commetsection',
  updatedAt: Date.now(),
}

export const tasks = [
  {
    id: 1,
    title: 'Написать тестовое задание',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 2,
    title: 'Устроиться на работу',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 3,
    title: 'Поесть',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 4,
    title: 'Не сдаваться',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 5,
    title: 'Поприседать',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 6,
    title: 'Вынести мусор',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 7,
    title: 'Закончить свой сайт',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 8,
    title: 'Посмотреть уроки',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
  {
    id: 9,
    title: 'Учиться',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
  },
]
