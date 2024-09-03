export default function Comment({ comment }) {
  return (
    <div className="mt-4 ml-4">
      <div className="w-[748px]  py-[10px] px-[16px] mb-4 ">
        Hi, <span className="text-primary">@Mathew Doe</span>
        <p className="text-xs leading-s font-roboto font-normal w-[716px] ">
          {comment.body}
        </p>
      </div>
      <hr className="mb-4 mt-8 border-[#B7B7B7] w-[600px] ml-4" />
    </div>
  );
}
