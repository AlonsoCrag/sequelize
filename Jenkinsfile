pipeline {
    agent any

    environment {
        developer = 'Elmer Cruz'
        failStatus = false
    }

    stages {
        stage('hint/app') {
            when {
                not {
                    branch 'master'
                }
            }
            steps {
                echo "This is the first step in the hint/app pipeline -> ${developer}"
                echo "Second step in the hint/app pipeline -> ${developer}"
            }
        }

        stage('test/env') {
            steps {
                echo "Fail status value ----> ${failStatus}"
            }
        }

        stage('deploy/app') {
            when {
                not {
                    branch 'master'
                }
            }
            steps {
                echo "THis is the deploymnt stage -> ${developer}"
                echo "Second step in deploymnt stage -> ${developer}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline was executed'
        }

        success {
            echo 'Pipeline was a success'
        }

        failure {
            echo 'Pipeline failed :C'
        }
    }

}