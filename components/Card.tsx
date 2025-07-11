type CardProps = {
    title: string;
    description: string;
  };
  
  export default function Card({ title, description }: CardProps) {
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  