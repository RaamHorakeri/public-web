import ReactQuill from "react-quill";
import Cookies from "js-cookie";
import "./quill.css";

export default function QuilEditor({ value, setValue }) {
  const access_token = Cookies.get("access_token");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["code-block", "blockquote"],
    ],
  };
  return (
    <div>
      <ReactQuill
        readOnly={access_token !== undefined ? false : true}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        className="text-black h-[140px] rounded-sm border-none"
      />
    </div>
  );
}
