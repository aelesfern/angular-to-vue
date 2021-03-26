import AngularView from './components/AngularView';
import TodosView from './components/TodosView';

export default [
    {path: '/angular', component: AngularView},
    {path: '/vue', component: TodosView},
    {path: '', redirect: '/angular'}
]