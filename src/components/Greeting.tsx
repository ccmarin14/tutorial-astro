import { useState } from 'preact/hooks';

interface Props {
  messages: string[];
}

export default function Greeting({ messages }: Props) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Nuevo saludo
      </button>
    </div>
  );
}