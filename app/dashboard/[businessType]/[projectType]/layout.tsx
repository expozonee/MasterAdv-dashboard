export default function SubCatetogriesLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {props.modal}
      {props.children}
    </div>
  );
}
