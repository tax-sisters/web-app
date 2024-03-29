import type { Metadata } from 'next';
import { MuiProvider, StateProvider, StyledProvider, PageLayout } from './_providers';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tax sisters Ltd',
  description: 'Tax sisters Ltd',
};

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <StyledProvider>
            <StateProvider>
              <PageLayout>
                <Nav />
                {children}
                <Footer />
              </PageLayout>
            </StateProvider>
          </StyledProvider>
        </MuiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
