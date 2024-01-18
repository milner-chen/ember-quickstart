import Component from '@glimmer/component';
import { action } from '@ember/object';

// basic component class
export default class PeopleListComponent extends Component {
  //  action decorator - use this method as an action in the template to respond to user interaction
  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }
}
