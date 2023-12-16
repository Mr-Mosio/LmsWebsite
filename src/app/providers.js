import useTheme, {ThemeProvider} from "@/contexts/useTheme";

export default function Providers({children}) {
    return <ThemeProvider>
        {children}
    </ThemeProvider>
}