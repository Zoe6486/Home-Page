import PropTypes from "prop-types";

Index.propTypes = {
  header: PropTypes.node, // 头部区显示的内容
  main: PropTypes.node, // 左侧栏显示的内容
  // footer: PropTypes.node, // 右侧内容栏显示的内容
};
function Index({ header, main }) {
  return (
    <div className="w-[100vw] h-[100vh] bg-bgColor text-textColor">
      {/* header 导航区*/}
      <header className="w-full h-14 border-b-[1px] border-textColor flex justify-center items-center">
        {header}
      </header>
      {/* main 主题内容区*/}
      <main className="container mx-auto  flex justify-center items-center">
        {main}
      </main>
      {/* footer 页脚区*/}
      {/* <footer className="flex justify-center items-center w-full h-10 border-t-[1px] border-t-purple-50 ">
        {footer}
      </footer> */}
    </div>
  );
}

export default Index;
