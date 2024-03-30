import {
  Form,
  Email,
  Input
} from "@/tailwind";

const index = ()=>{
  const design = (
    <>
      <Form>
        <div className="flex flex-col gap-5 mb-5">
          <Input type="text" name="name" placeholder="Your name" />
          <Email placeholder="email@gmail.com" />
          <Input type="number" name="mobile" placeholder="Mobile" />
          <Input type="text" name="message" textarea placeholder="Message" />
        </div>
      </Form>
    </>
  );
  return design;
}

export default index;
