pipeline {
    agent {  
        label 'slave'
    }
   

    tools {
        // Use the NodeJS tool you configured in Jenkins
        nodejs 'react' // 'nodejs' should match the name you set in Global Tool Configuration
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository
                git ''            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the React application
                sh 'npm run build'
            }
        }
        stage('Image') {
            steps {
                // Build the React application
                sh 'docker build -t react-app .'
            }
        }
   
    }
   

    post {
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
