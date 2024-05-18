import ProfileIndex from "@/Components/Profile/ProfileIndex";

const page = ({ params }: { params: { username: string[] } }) => {
  return (
    <div>
      <ProfileIndex />
    </div>
  );
};

export default page;
