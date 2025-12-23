import React from "react";
import SectionTitle from "../components/SectionTitle";

function Contact({ scrollRef }) {
  return (
    <div
      ref={(cur) => {
        if (cur) {
          scrollRef.current[1] = cur;
        }
      }}
    >
      <SectionTitle>Contact</SectionTitle>
      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <td>
              <a href="mailto:sengmin14@naver.com">sengmin14@naver.com</a>
            </td>
          </tr>
          <tr>
            <th>Github</th>
            <td>
              <a href="https://github.com/sengmin14">github.com/sengmin14</a>
            </td>
          </tr>
          <tr>
            <th>Blog</th>
            <td></td>
          </tr>
          {/* <tr>
                <th>Instagram</th>
                <td>
                    <a href="https://www.instagram.com/dain.py/">
                        @dain.py
                    </a>
                </td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
