```mermaid
classDiagram
    class App{
        +NavigationContainer()
    }
    class NavigationContainer{
        +StackNavigator
    }
    class StackNavigator{
        +LoginPage
        +LandingPage
        +LogsPage
    }
    class LoginPage{
        +Login Functionality
    }
    class LandingPage{
        +Navigation to LogsPage
    }
    class LogsPage{
        +Display Logs
    }

    App --> NavigationContainer : contains
    NavigationContainer --> StackNavigator : uses
    StackNavigator --> LoginPage : navigates
    StackNavigator --> LandingPage : navigates
    StackNavigator --> LogsPage : navigates
    LandingPage --> LogsPage : directs
