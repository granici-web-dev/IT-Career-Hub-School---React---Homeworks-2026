import { Input, Button, Form } from 'antd';

function TaskForm({ name, description, handleSubmit, setName, setDescription }) {
  return (
    <Form layout="vertical" onFinish={handleSubmit} style={{ maxWidth: 500 }}>
      <Form.Item label="Имя">
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      </Form.Item>

      <Form.Item label="Описание">
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TaskForm;
