import ThemeProviderWrapper from "./components/theme/ThemeProvider";
import ThemeSettings from "./components/ThemeSettings";
import BaseLayout from "./components/layouts/BaseLayout";
function App() {
  return (
    <ThemeProviderWrapper>
      <BaseLayout>
        <ThemeSettings />
      </BaseLayout>
    </ThemeProviderWrapper>
  );
}

export default App;
