import { Card } from 'antd';

function CardEl({ submitted }) {
  return (
    <Card title="Отправленные данные:" style={{ marginTop: 24 }}>
      <p>
        <strong>Имя:</strong> {submitted.name}
      </p>
      <p>
        <strong>Описание:</strong> {submitted.description}
      </p>
    </Card>
  );
}

export default CardEl;
