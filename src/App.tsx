import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css'
import './styles/theme.css'
export function App() {
    return (
        <>
            <Heading>
                hello
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat a sapiente doloremque non nisi, facere corporis possimus est tempora error enim quasi similique laudantium omnis pariatur aliquam commodi libero.</p>
        </>
    )
}

