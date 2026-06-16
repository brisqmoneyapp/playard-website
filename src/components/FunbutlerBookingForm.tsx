type FunbutlerBookingFormProps = {
  clientId?: string;
  bookingFormId: string;
  title?: string;
};

export default function FunbutlerBookingForm({
  clientId = "67360c42dd5e621cbcc0d7a5",
  bookingFormId,
  title = "Playard Booking Form",
}: FunbutlerBookingFormProps) {
  const srcDoc = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <script src="https://booking.funbutler.com/assets/bootstrapper/bootstrap.js" data-client-id="${clientId}" data-booking-form-id="${bookingFormId}"></script>
      </body>
    </html>
  `;

  return (
    <div className="min-h-[720px] overflow-hidden border-4 border-black bg-[#fff3dd] p-1 shadow-2xl sm:min-h-[760px] sm:p-4 lg:min-h-[900px]">
      <iframe
        title={title}
        srcDoc={srcDoc}
        className="h-[1150px] w-full border-0 bg-[#fff3dd] sm:h-[1050px] lg:h-[1000px]"
        loading="eager"
        scrolling="yes"
      />
    </div>
  );
}