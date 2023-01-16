import { shallow } from 'enzyme';
import Notifications from '../dashboard/src/components/Notifications.jsx';

const wrapper = shallow(<Notifications />);

it('renders without crashing', () => {
shallow(<Notifications />);
});
it('renders three list items', () => {
expect(wrapper.find('li').children().length).toEqual(3);
});
it('renders the <p>', () => {
expect(
    wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
).toBeTruthy();
});