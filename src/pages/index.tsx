import './index.less';

export default function IndexPage(props: any) {
  return (
    <div className="layout">
      <div className="layout-left" ></div>
      <div className="layout-right">
        <div className="layout-right-header"></div>
        <div className="layout-right-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}
