interface MailboxProps {
  username: string;
  messages: string[];
}

export default function Mailbox({ username, messages }: MailboxProps) {
  const handleOpenInbox = (): void => {
    console.log("Click on Open inbox");
  };
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <>
          <p>You have {messages.length} unread messages</p>
          <p>Check your inbox to read them!</p>
          <button type="button" onClick={() => handleOpenInbox()}>
            Open inbox
          </button>
        </>
      ) : (
        <div>
          <p>No unread messages</p>
        </div>
      )}
    </>
  );
}
