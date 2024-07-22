function AddBot() {
  //@ts-expect-error
  window.location = 'https://discord.com/oauth2/authorize?client_id=971697945449738280&permissions=2416249894&scope=bot%20applications.commands'
  return (
    null
  )
}

export default AddBot;