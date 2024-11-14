const ContactDialog = (props) => {
  const { setIsContactDialogOpen, isContactDialogOpen, contactDialogRef } = props;

  return (
    <dialog className="fixed inset-0 drop-shadow-lg lg:w-2/3 w-full p-10 rounded-lg z-100" open={isContactDialogOpen}>
      <div className="w-100 flex justify-between">
        Contact Data
          <button onClick={() => setIsContactDialogOpen(false)} className="bg-gray py-1 px-2 rounded-lg">
          Close
          </button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 w-100 pt-10 mb-8">
        <div className="w-100 bg-gray flex flex-col items-center justify-center space-y-2 p-3 rounded">
          <img src="./static/email-icon.png" width="26px"></img>
          <span>producer@email.com</span>
        </div>
        <div className="w-100 bg-gray flex flex-col items-center justify-center space-y-2 p-3 rounded">
          <img src="./static/ig-icon.png" width="26px"></img>
          <span>@theProducer</span>
        </div>
        <div className="w-100 bg-gray flex flex-col items-center justify-center space-y-2 p-3 rounded">
          <img src="./static/youtube-icon.png" width="26px"></img>
          <span>Producer</span>
        </div>
        <div className="w-100 bg-gray flex flex-col items-center justify-center space-y-2 p-3 rounded">
          <img src="./static/beatstars-icon.png" width="26px"></img>
          <span>Producer</span>
        </div>
      </div>
    </dialog >
  );
};

export default ContactDialog;
