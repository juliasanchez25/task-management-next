import { TaskTypeOption } from '@/models/Task';

export class ListService {
  static getLists(): TaskTypeOption[] {
    if (!localStorage.getItem('lists')) {
      this.AddDefaultLists();
    }
    return JSON.parse(localStorage.getItem('lists') || '[]') as TaskTypeOption[];
  }

  static addList(list: TaskTypeOption): void {
    const lists = this.getLists();
    lists.push(list);
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  static removeList(listName: string): void {
    const lists = this.getLists();
    const newList = lists.filter((list) => list.value !== listName);
    localStorage.setItem('lists', JSON.stringify(newList));
  }

  private static AddDefaultLists(): void {
    const defaultLists = [
      { value: 'Trabalho', label: 'Trabalho' },
      { value: 'Pessoal', label: 'Pessoal' }
    ];
    localStorage.setItem('lists', JSON.stringify(defaultLists));
  }
}
