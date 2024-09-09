pipeline {
    agent {  
        label 'staging-slave'
    }

    tools {
        // Use the NodeJS tool you configured in Jenkins
        nodejs 'nodejs' // 'nodejs' should match the name you set in Global Tool Configuration
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository
                git branch: 'sree/VIR-71/publicWebCICD', credentialsId: 'git-cred', url: 'https://github.com/eskeon/public-web.git'
            }
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
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                sh 'docker build -t public-web-app .'
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
