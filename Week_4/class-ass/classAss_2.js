const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const filePath = './todos.json';

const loadTodos = () => {
    try {
      const data = fs.readFileSync(path, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  };

const saveTodos = (todo) => {
    fs.writeFileSync(filePath, JSON.stringify(todo, null, 2));
};

program
  .name('Todo App')
  .description('CLI to do file-based tasks')
  .version('0.8.0');

program
  .command('add')
  .description('Add todo')
  .argument('<TODO>', 'Todo to add')
  .action((TODO)=>{
    const todos = loadTodos();
    todos.push({ TODO });
    saveTodos(todos);
    console.log(`Added: "${TODO}"`)
  });

program
  .command('delete')
  .description('Delete a todo')
  .argument('<index>', 'Index of the todo to delete')
  .action((index) => {
    const todos = loadTodos();
    if (index < 1 || index > todos.length) {
      console.log('Invalid index');
      return;
    }
    const deleted = todos.splice(index - 1, 1);
    saveTodos(todos);
    console.log(`Deleted: "${deleted.TODO}"`);
  });

program.parse();