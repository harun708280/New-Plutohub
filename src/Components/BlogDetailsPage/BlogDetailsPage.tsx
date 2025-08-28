"use client";

import { Tab } from "react-bootstrap";
import TableOfContents from "./TableOfContents/TableOfContents";
import BlogContent from "./BlogContent/BlogContent";
import RightSidebar from "./RightSidebar/RightSidebar";

interface BlogDetailsPageProps {
  id: {
    id: string;
  };
}

const BlogDetailsPage = ({ id }: BlogDetailsPageProps) => {
  return (
    <div className="container py-4 blog-details">
      <Tab.Container defaultActiveKey="stock">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-xl-3 mb-4">
            <div className="sticky-sidebar">
              <TableOfContents />
            </div>
          </div>

          {/* Blog Content */}
          <div className="col-xl-6 mb-4">
            <div className="content-area">
              <BlogContent />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-xl-3">
            <div className="sticky-sidebar">
              <RightSidebar />
            </div>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default BlogDetailsPage;
