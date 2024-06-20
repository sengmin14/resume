import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import {
  MainContainer,
  MainSectionContainer,
  Margin,
} from './components/Containers';
import Navigation from './components/Navigation';
import Title from './section/Title';
import Intro from './section/Intro';
import Contact from './section/Contact';
import Skill from './section/Skill';
import WorkExperience from './section/WorkExperience';
import PersonalExperience from './section/PersonalExperience';
// import Timeline from './section/Timeline';
import Footer from './section/Footer';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Award from './section/Award';
import RecentStudy from './section/RecentStudy';

function App() {
  const scrollRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(new Set([0]));
  const observeRef = (ref, index) => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log('in', index);
          setCurrentIndex((prev) => new Set([...prev, index]));
        } else {
          console.log('out', index);
          setCurrentIndex(
            (prev) => new Set([...prev].filter((x) => x !== index))
          );
        }
      });
    });
    io.observe(ref);
  };

  useEffect(() => {
    scrollRef.current.forEach(observeRef);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Margin>
        <MainContainer>
          <Navigation ref={scrollRef} currentIndex={currentIndex} />
          <MainSectionContainer>
            <Title scrollRef={scrollRef} />
            <Intro />
            <Contact scrollRef={scrollRef} />
            <Skill scrollRef={scrollRef} />
            <RecentStudy scrollRef={scrollRef} />
            <WorkExperience scrollRef={scrollRef} />
            <PersonalExperience scrollRef={scrollRef} />
            <Award scrollRef={scrollRef} />
            {/* <Timeline scrollRef={scrollRef} /> */}
          </MainSectionContainer>
        </MainContainer>
        <Footer />
      </Margin>
    </ThemeProvider>
  );
}

export default App;
