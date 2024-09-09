pipeline {
    agent {  
        label 'staging-slave'
    }

    tools {
        // Use the NodeJS tool you configured in Jenkins
        nodejs 'nodejs'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code to access the Jenkinsfile
                checkout scm
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
                withCredentials([string(credentialsId: 'git-pass', variable: 'GIT_TOKEN')]) {
                    // Build the Docker image with the GitHub token
                    sh 'docker build --build-arg GIT_TOKEN=$GIT_TOKEN -t public-web-app .'
                }
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
