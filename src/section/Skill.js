import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Tag from '../components/Tag';

function Skill({ scrollRef }) {
    return (
        <div ref={(cur) => (scrollRef.current[2] = cur)}>
            <SectionTitle>Skill</SectionTitle>
            <table>
                <tbody>
                    <tr>
                        <th>Language</th>
                        <td>
                            <Tag>C#</Tag>
                            <Tag>Javascript</Tag>
                            <Tag>JAVA</Tag>
                        </td>
                    </tr>
                    <tr>
                        <th>Frontend</th>
                        <td>
                            <Tag>React</Tag>
                            <Tag>Vue</Tag>
                        </td>
                    </tr>
                    <tr>
                        <th>BackEnd</th>
                        <td>
                            <Tag>ASP.NET</Tag>
                            <Tag>SPRING BOOT</Tag>
                        </td>
                    </tr>
                    <tr>
                        <th>Database</th>
                        <td>
                            <Tag>Oracle</Tag>
                            <Tag>MySQL</Tag>
                        </td>
                    </tr>
                    <tr>
                        <th>Test</th>
                        <td>
                            <Tag>JUnit</Tag>
                        </td>
                    </tr>
                    <tr>
                        <th>Tools</th>
                        <td>
                            <Tag>Git</Tag>
                            <Tag>SVN</Tag>
                            <Tag>Jira</Tag>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Skill;
