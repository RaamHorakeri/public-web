pipeline {
    agent { 
        label 'staging-slave'
           
        }
        
        tools {
            nodejs 'nodejs'
        }    

    
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code to access the Jenkinsfile
               git branch: 'sree/VIR-71/publicWebCICD', credentialsId: 'git-passed', url: 'https://github.com/eskeon/public-web.git'
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
                sh 'ls -l'
            }
        }

       
        /*stage('Build Docker Image') {
            steps {
                
                    sh 'docker build -t public-web-app:v1 .'
                }
            }*/
        }
    }
